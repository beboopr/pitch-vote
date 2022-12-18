import "./sectiontitle.css";

export default function SectionTitle({ title }) {
  return (
    <>
      <div className="section-title-container">
        <div className="section-title">
          <h3 className="section-title-h3">{title}</h3>
        </div>
      </div>
    </>
  );
}
