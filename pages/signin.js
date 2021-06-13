import Input from "../components/Input/Input";

const signin = () => {
  return (
    <section className={`d-flex justify-content-center align-items-center`}>
      <div className="form-box">
        <h1 className="heading font-weight-normal">Sign In</h1>
        <Input placeholder="Name" classList="mt-4" />
        <Input placeholder="Email" classList="mt-3" />
        <Input placeholder="Password" classList="mt-3" />
        <p className="paragraph text-right mt-3">Create Account</p>
      </div>

      <style jsx>{`
        section {
          height: 100vh;
          background-color: #f0f0f0;
        }

        .form-box {
          width: 98%;
          max-width: 340px;
        }
      `}</style>
    </section>
  );
};

export default signin;
