import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.h5`
  margin: 0;
  margin-top: 32px;
  font-size: 1.2rem;
  color: #333;
`;

const CategoryTitle = styled.h5`
  font-size: 1rem;
  color: #333;
  margin-top: 20px;
  cursor: pointer;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 10px;
  padding-right: 30px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const CardText = styled.p`
  font-size: 0.5rem;
  color: #333;
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
  margin-right: 40px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function AmazonPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openCategories, setOpenCategories] = useState({});
  const [currentCategoryPage, setCurrentCategoryPage] = useState(1);
  const [categoriesPerPage, setCategoriesPerPage] = useState(3);

  useEffect(() => {
    // 이전에 저장된 데이터를 확인
    const savedCategories = localStorage.getItem("categoriesData");
    if (savedCategories && savedCategories.length > 0) {
      // 로컬 저장소에 데이터가 있다면 그것을 사용
      setCategories(JSON.parse(savedCategories));
      setLoading(false);
    } else {
      // 로컬 저장소에 데이터가 없다면 API 요청
      const fetchBestSellers = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/amazon/bestsellers`
          );
          setCategories(response.data);
          // 데이터를 받아오면 localStorage에 저장
          localStorage.setItem("categoriesData", JSON.stringify(response.data));
        } catch (error) {
          console.error("Failed to load best sellers data", error);
        } finally {
          setLoading(false);
        }
      };

      fetchBestSellers();
    }
  }, []);

  useEffect(() => {
    const updateCategoriesPerPage = () => {
      if (window.innerWidth < 600) {
        setCategoriesPerPage(1);
      } else if (window.innerWidth < 1200) {
        setCategoriesPerPage(2);
      } else {
        setCategoriesPerPage(3);
      }
    };

    // 초기 값 설정 및 창 크기 변경 이벤트 리스너 추가
    updateCategoriesPerPage();
    window.addEventListener("resize", updateCategoriesPerPage);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("resize", updateCategoriesPerPage);
  }, []);

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const totalCategoryPages = Math.ceil(categories.length / categoriesPerPage);
  const currentCategories = categories.slice(
    (currentCategoryPage - 1) * categoriesPerPage,
    currentCategoryPage * categoriesPerPage
  );

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Title>Amazon 베스트셀러 리뷰</Title>
      <PaginationControls>
        <PageButton
          onClick={() => setCurrentCategoryPage((prev) => prev - 1)}
          disabled={currentCategoryPage === 1}
        >
          &lt;
        </PageButton>
        <PageButton
          onClick={() => setCurrentCategoryPage((prev) => prev + 1)}
          disabled={currentCategoryPage === totalCategoryPages}
        >
          &gt;
        </PageButton>
      </PaginationControls>
      {loading ? (
        <p>Loading...</p>
      ) : categories.length === 0 ? (
        <p>No data available for best sellers.</p>
      ) : (
        currentCategories.map((categoryData, index) => (
          <div key={index}>
            <CategoryTitle onClick={() => toggleCategory(index)}>
              {categoryData.category} {openCategories[index] ? "-" : "+"}
            </CategoryTitle>
            {openCategories[index] && (
              <ProductGrid>
                {categoryData.products.map((product, idx) => (
                  <ProductCard
                    key={idx}
                    onClick={() => handleCardClick(product.url)}
                  >
                    <CardText>
                      <strong>No.</strong> {product.num}
                    </CardText>
                    <CardText>
                      <strong>상품 이름:</strong> {product.title}
                    </CardText>
                    <CardText>
                      <strong>별점:</strong> {product.rating}
                    </CardText>
                    <CardText>
                      <strong>5점 비율:</strong> {product.fivestars || "N/A"}
                    </CardText>
                  </ProductCard>
                ))}
              </ProductGrid>
            )}
          </div>
        ))
      )}
    </Container>
  );
}

export default AmazonPage;
