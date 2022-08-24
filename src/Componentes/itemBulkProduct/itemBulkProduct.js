import React from "react";
import './itemBulkProduct.css'
export function ItemBulkProduct({data}) {
  return (
    <>
      <div className="row" id="row">
        <div className="col-xs-12 col-sm-12 col-md-5">
          <section className="product-images js-product-images-container">
            <ul className="product-image-previews">
              <li className="thumbnail-item is-active">
                <img
                  data-src="https://home.ripley.cl/store/Attachment/WOP/D129/2000369312422/2000369312422_2.jpg"
                  alt="JEANS INDEX BASICO KATE"
                  className="lazyloaded img-product"
                  itemProp="image"
                  src="https://home.ripley.cl/store/Attachment/WOP/D129/2000369312422/2000369312422_2.jpg"
                />
              </li>
            </ul>
            <div className="product-carousel-container gallery-container">
              <div
                className="owl-carousel product-carousel owl-theme"
                style={{ opacity: 1, display: "block" }}
              >
                <div className="owl-wrapper-outer">
                  <div
                    className="owl-wrapper"
                    style={{
                      width: 2608,
                      left: 0,
                      display: "block",
                      transition: "all 0ms ease 0s",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div className="owl-item" style={{ width: 326 }}>
                      <div className="item">
                        <img
                          alt="JEANS INDEX BASICO KATE"
                          data-src="https://home.ripley.cl/store/Attachment/WOP/D129/2000369312422/2000369312422_2.jpg"
                          className="ls-is-cached lazyloaded img-product"
                          itemProp="image"
                          src="https://home.ripley.cl/store/Attachment/WOP/D129/2000369312422/2000369312422_2.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5">
          <section className="product-header hidden-xs">
            <h1>{data["Titulo"]}</h1>
            <p className="sku-container">
              <span className="sku-label">SKU:</span>
              <span className="sku sku-value">{data["SKU_Seller"]}</span>
            </p>
            <div
              className="product-rating product-rating-small"
              role="button"
              tabIndex={0}
              aria-hidden="true"
              id="pr-snippetdisplay"
            >
              <div className="p-w-r">
                <section
                  id="pr-category-snippets-2000369312354"
                  aria-labelledby="pr-xmiFvPKDNTCSM2DG-zBwh"
                  data-testid="category-snippet"
                >
                  <div className="pr-snippet pr-category-snippet">
                    <div className="pr-category-snippet__rating pr-category-snippet__item">
                      <div
                        className="pr-snippet-stars pr-snippet-stars-png"
                        role="img"
                        aria-label="Clasificación 4.2 de 5 estrellas"
                      >
                        <div aria-hidden="true" className="pr-rating-stars">
                          <div className="pr-star-v4 pr-star-v4-100-filled" />
                          <div className="pr-star-v4 pr-star-v4-100-filled" />
                          <div className="pr-star-v4 pr-star-v4-100-filled" />
                          <div className="pr-star-v4 pr-star-v4-100-filled" />
                          <div className="pr-star-v4 pr-star-v4-25-filled" />
                        </div>
                        <div
                          aria-hidden="true"
                          className="pr-snippet-rating-decimal"
                        >
                          4.2
                        </div>
                      </div>
                    </div>
                    <div className="pr-category-snippet__total pr-category-snippet__item">
                      51 reseñas
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <h2 className="product-short-description">Jeans</h2>
          </section>
          <section className="product-info">
            <dl className="prices-list">
              <div className="product-price-container product-normal-price">
                <dd className="product-price-type">Normal</dd>
                <dt className="product-price product-price__line-thru">
                  $16.990
                </dt>
              </div>
            </dl>
          </section>
          <div id="divider-product-attributes-list" />
          <section className="product-options">
            <div className="product-options-container">
              <div className="custom-select is-pristine radio-box-wide">
                <div className="custom-select-title">
                  <h4 className="custom-select-name">Color{/* */}:</h4>
                  <span className="custom-select-value">Denim</span>
                </div>
              </div>
              <div className="custom-select is-pristine radio-box">
                <div className="custom-select-title">
                  <h4 className="custom-select-name">Talla:</h4>
                  <span className="custom-select-value" />
                </div>
              </div>
            </div>
            <div className="size-chart-wrapper-0">
              <section className="product-size">
                <div className="product-size-info">
                  <button type="button" className="product-size-info-link">
                    Guia de tallas
                  </button>
                </div>
              </section>
            </div>
          </section>
          <section className="product-extras" />
          <div />
        </div>
      </div>
    </>
  );
}
