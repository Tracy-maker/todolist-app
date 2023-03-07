import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button/Button";

function ButtonPage() {
  const handlerClick = () => {};

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handlerClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handlerClick}>
          <GoCloudDownload />
          Buy Now!
          </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handlerClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
