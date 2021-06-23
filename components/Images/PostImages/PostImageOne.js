
const PostImageOne = ({classList}) => {
    return (
        <div className={`d-flex justify-content-between align-items-center overflow-hidden ${classList && classList}`}>
            <img src="/assets/images/productThree.png" className="product-images" />
            <img src="/assets/images/productThree.png" className="product-images" />

            <style jsx>{`
                .product-images {
                    object-fit: cover;
                    object-position: center;
                    border-radius: 10px;
                    width: 49%;
                    height: 450px;
                }`}</style>
        </div>
    )
}

export default PostImageOne;
