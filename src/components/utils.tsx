
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={"col col--6 aos-init aos-animate"}>
      {imgUrl && (
        <Link className="navbar_link" to={imgUrl}>
          <div className="group gradient-box margin-bottom--lg">
            <div className="gradient-box-child"></div>
            <div className="gradient-box-content">
              <h3>{title}</h3>
              <p className="lead mb-0">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
  