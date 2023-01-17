import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-selection">
        <p>
          <i className="bi-chevron-left"></i> Previous
        </p>
        <p>
          Next
          <i className="bi-chevron-right"></i>
        </p>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>Copyright © 2022 TEO. All right reserved.</p>
      </div>
    </div>
  );
}
