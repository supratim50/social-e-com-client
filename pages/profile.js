import SquareButton from "../components/Buttons/SquareButton/SquareButton";

const profile = () => {
  return (
    <section className="overflow-hidden">
      <div className="profile-box row mt-4">
        <div className="posts">
          {/* heading */}
          <div className="px-4 py-3 bg-white rounded-md d-flex justify-content-between align-items-center">
            <h3 className="heading primary-text font-weight-bold mb-0">
              Posts
            </h3>
            <SquareButton />
          </div>
          {/* posts section */}
          <div className="w-100 mt-3 border">this is posts section</div>
        </div>
        <div className="profile bg-white rounded-md px-3 py-4">world</div>
      </div>

      <style jsx>{`
        section {
          height: 100vh;
          margin-top: 95px;
          background-color: #fafafa;
        }

        .profile-box {
          margin-left: 80px;
        }

        .posts {
          width: 67%;
        }
        .profile {
          width: 28%;
          height: 83%;
          margin-top: 120px;
          position: fixed;
          top: 0;
          right: 10px;
          bottom: 10px;
        }
      `}</style>
    </section>
  );
};

export default profile;
