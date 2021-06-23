
const PostImage = ({classList}) => {
    return (
        <div className={`d-flex justify-content-center align-items-center overflow-hidden ${classList && classList}`}>
            <img src="/assets/images/productThree.png" className="product-image" />

            <style jsx>{`
                .product-image {
                    border-radius: 10px;
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    max-height: 550px;
                }`}</style>
        </div>
    )
}

export default PostImage;
