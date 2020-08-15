import React, { useEffect } from "react";
import { Card, Row, Col } from "antd";
import Icon from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default function Overview(props) {
  useEffect(() => {
    props.router && props.router(props.location.pathname);
  }, []);
  const route = () => (
    <svg
      t="1597473695507"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2691"
      width="100"
      height="100"
    >
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill="#3EC4B2"
        p-id="2692"
      ></path>
      <path
        d="M650.6496 490.5472H373.3504a74.6496 74.6496 0 1 1 0-149.248h283.392v42.6496L768 319.9488 656.7424 256v42.6496H373.3504a117.2992 117.2992 0 1 0 0 234.5472h277.2992a74.6496 74.6496 0 1 1 0 149.2992H368.4864v-42.6496l-112.0256 65.792L368.4864 768v-42.8544h282.1632a117.2992 117.2992 0 1 0 0-234.5984z"
        fill="#FFFFFF"
        p-id="2693"
      ></path>
    </svg>
  );
  const personalInfo = () => (
    <svg
      t="1597474836825"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8603"
      width="100"
      height="100"
    >
      <path
        d="M4.03456 655.488c-0.00512 33.5616 25.50272 60.75904 56.96512 60.77952 31.46752 0.01024 56.98048-27.20256 56.9856-60.75904v-0.02048c0.00512-33.57184-25.4976-60.77952-56.96-60.78976-31.46752 0-56.9856 27.20256-56.9856 60.76928l-0.00512 0.02048z"
        fill="#4D73FF"
        p-id="8604"
      ></path>
      <path
        d="M515.12832 376.31488c0 33.5616 25.49248 60.7744 56.97024 60.77952 31.46752 0.00512 56.98048-27.20256 56.98048-60.75904v-0.02048c0-33.57184-25.49248-60.77952-56.96-60.78976-31.46752 0-56.98048 27.20256-56.99072 60.76416v0.0256z"
        fill="#F99969"
        p-id="8605"
      ></path>
      <path
        d="M231.93088 214.88128c0 18.88256 14.45888 34.18624 32.28672 34.18624 17.83296 0 32.2816-15.30368 32.2816-34.18624 0-18.88256-14.44864-34.18624-32.2816-34.18624-17.82784 0-32.28672 15.30368-32.28672 34.18624z"
        fill="#4D73FF"
        p-id="8606"
      ></path>
      <path
        d="M729.7792 376.30464c0 18.88256 14.45888 34.19136 32.30208 34.19136 17.82784 0 32.2816-15.30368 32.2816-34.19136 0-18.87744-14.44352-34.18112-32.2816-34.18112-17.8432 0-32.30208 15.3088-32.30208 34.18112z"
        fill="#F99969"
        p-id="8607"
      ></path>
      <path
        d="M1019.97056 842.32192a32.5632 32.5632 0 0 1-32.56832 32.5632H315.008a32.5632 32.5632 0 0 1-32.56832-32.5632 32.55808 32.55808 0 0 1 32.56832-32.56832h672.39424a32.55808 32.55808 0 0 1 32.56832 32.56832z"
        fill="#EF9567"
        p-id="8608"
      ></path>
      <path
        d="M660.69504 700.96896c-160.6144 0-291.28192-130.66752-291.28192-291.28192s130.66752-291.28192 291.28192-291.28192c160.6144 0 291.28704 130.66752 291.28704 291.28192s-130.67264 291.28192-291.28704 291.28192z m0-521.12384c-126.73536 0-229.84192 103.10656-229.84192 229.84192 0 126.73536 103.10656 229.84192 229.84192 229.84192s229.84704-103.10656 229.84704-229.84192c0-126.73536-103.11168-229.84192-229.84704-229.84192z"
        fill="#4D73FF"
        p-id="8609"
      ></path>
    </svg>
  );
  const articleList = () => (
    <svg
      t="1597474990309"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="10598"
      width="100"
      height="100"
    >
      <path
        d="M185.8 305.6h443.3v453.7H185.8z"
        fill="#4585F5"
        opacity=".504"
        p-id="10599"
      ></path>
      <path
        d="M142.8 861.6V162.4h587.6l150.7 132.1v567.1H142.8zM760 83.6H135c-39.1 0-71 31.8-71 71v715c0 39.1 31.8 71 71 71h754c39.1 0 71-31.8 71-71V258.8L760 83.6z"
        fill="#323232"
        p-id="10600"
      ></path>
      <path
        d="M751.6 615.9h-502c-22.1 0-40.1 17.7-40.1 39.3 0 21.7 18.1 39.3 40.1 39.3h502.1c22.1 0 40.1-17.7 40.1-39.3 0-21.6-18.1-39.3-40.2-39.3zM209.6 414c0 21.7 18.1 39.3 40.1 39.3h502.1c22.1 0 40.1-17.7 40.1-39.3 0-21.7-18.1-39.3-40.1-39.3h-502c-22.2-0.1-40.2 17.6-40.2 39.3z"
        fill="#323232"
        p-id="10601"
      ></path>
    </svg>
  );
  const appreciate = () => (
    <svg
      t="1597475103122"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="12473"
      width="100"
      height="100"
    >
      <path
        d="M537.126788 510.498909a36.712727 36.712727 0 0 1-22.888727-7.960566c-16.025859-12.651313-18.751354-35.898182-6.101334-51.913697l147.858101-187.186424c12.651313-16.025859 35.955071-18.742303 51.907233-6.09099 16.027152 12.651313 18.752646 35.898182 6.102626 51.918869L566.146586 496.447354c-7.293414 9.232808-18.10101 14.051556-29.019798 14.051555z"
        fill="#333333"
        p-id="12474"
      ></path>
      <path
        d="M518.661172 803.846465c-20.416646 0-36.963556-16.550788-36.963556-36.964849V494.266182c0-20.414061 16.549495-36.964848 36.963556-36.964849 20.412768 0 36.964848 16.550788 36.964848 36.964849v272.615434c0 20.414061-16.550788 36.964848-36.964848 36.964849z"
        fill="#333333"
        p-id="12475"
      ></path>
      <path
        d="M693.317818 532.982949H344.000646c-20.408889 0-36.964848-16.55596-36.964848-36.962262 0-20.414061 16.55596-36.964848 36.964848-36.964849h349.317172c20.414061 0 36.964848 16.550788 36.964849 36.964849 0 20.406303-16.550788 36.962263-36.964849 36.962262z m0 144.530102H344.000646c-20.408889 0-36.964848-16.549495-36.964848-36.964849 0-20.408889 16.55596-36.958384 36.964848-36.958384h349.317172c20.414061 0 36.964848 16.549495 36.964849 36.958384 0 20.415354-16.550788 36.964848-36.964849 36.964849z"
        fill="#333333"
        p-id="12476"
      ></path>
      <path
        d="M280.980687 263.250747L410.353778 429.588687h110.894545L391.873939 263.250747h-110.893252z"
        fill="#FA7268"
        p-id="12477"
      ></path>
      <path
        d="M900.125737 974.81697H123.879434c-40.772525 0-73.929697-33.157172-73.929697-73.929697V124.634505c0-40.762182 33.157172-73.929697 73.929697-73.929697h776.24501c40.772525 0 73.925818 33.167515 73.925819 73.929697V900.887273c0 40.772525-33.155879 73.929697-73.924526 73.929697zM123.879434 124.634505V900.887273h776.296728l-0.050425-776.252768H123.879434z"
        fill="#333333"
        p-id="12478"
      ></path>
    </svg>
  );
  const pic = () => (
    <svg
      t="1597475176745"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="16005"
      width="100"
      height="100"
    >
      <path
        d="M832 64a128 128 0 0 1 128 128v256h-64V192a64 64 0 0 0-56.512-63.552L832 128H128a64 64 0 0 0-63.552 56.512L64 192v576a64 64 0 0 0 56.512 63.552L128 832h384v64H128a128 128 0 0 1-128-128V192a128 128 0 0 1 128-128h704z"
        fill="#51596A"
        p-id="16006"
      ></path>
      <path
        d="M351.68 512.256c27.776 2.112 52.992 12.736 65.6 33.92L512 680.32v111.232l-149.824-224.64c-4.224-7.552-25.6-17.984-42.112 4.352l-192 241.664v17.408c0 6.528 4.736 10.88 11.84 10.88L512 841.088 512 896H128c-42.88 0-64-16.64-64-54.848v-40.576c0-6.4 2.56-12.672 7.552-16.96l209.472-243.84c15.168-19.008 42.88-29.632 70.656-27.52zM672 384C618.176 384 576 339.52 576 288S620.48 192 672 192s96 44.48 96 96S725.824 384 672 384z m0-128c-18.304 0-32 13.696-32 32 0 18.304 13.696 32 32 32 18.304 0 32-13.696 32-32 0-18.304-13.696-32-32-32z"
        fill="#51596A"
        p-id="16007"
      ></path>
      <path
        d="M740.288 864l51.648-32 74.24-36.992 40.384-36.864V576l-40.32-32.384h-55.36l-29.184-42.112-41.408-15.744-51.712 15.744-46.464 42.112-61.184 13.312-22.4 51.072 9.792 64-9.856 52.8 9.856 48 27.52 32.192h46.272l46.464 27.008 15.424 32z"
        fill="#E5F1FF"
        p-id="16008"
      ></path>
      <path
        d="M739.2 585.856a85.76 85.76 0 0 0-86.208 86.144 85.76 85.76 0 0 0 86.144 86.144 85.76 85.76 0 0 0 86.208-86.144 85.76 85.76 0 0 0-86.208-86.144z m1.088 138.88a51.968 51.968 0 0 1-51.712-51.648c0-28.8 22.848-51.648 51.712-51.648 28.8 0 51.648 22.848 51.648 51.648 0 28.8-23.808 51.712-51.648 51.712z m205.696-16.32c-10.368-8-16.128-21.632-16.128-36.416 0-14.784 5.76-27.264 16.128-36.416 12.736-10.24 17.28-26.112 11.52-39.744a246.784 246.784 0 0 0-41.472-68.224 37.824 37.824 0 0 0-41.6-10.24 57.984 57.984 0 0 1-41.536-1.152c-1.152 0-1.152-1.152-2.304-1.152-12.672-7.936-20.736-19.328-21.888-32.96a35.264 35.264 0 0 0-28.8-30.72 270.144 270.144 0 0 0-85.44 0 34.048 34.048 0 0 0-30.016 29.568 51.392 51.392 0 0 1-24.192 35.264 44.8 44.8 0 0 1-41.6 3.392 38.72 38.72 0 0 0-43.84 9.088c-17.28 20.48-31.104 43.264-40.32 67.136-5.76 13.632-1.216 29.568 11.52 39.744 10.368 8 16.128 21.632 16.128 36.416 0 14.784-5.76 27.264-16.128 36.416-12.736 10.24-17.28 26.112-11.52 39.744 9.216 23.872 24.192 47.808 41.472 68.224a37.824 37.824 0 0 0 41.6 10.24 57.984 57.984 0 0 1 41.536 1.152c1.152 0 1.152 1.152 2.304 1.152 12.672 7.936 20.736 19.328 21.888 32.96a35.264 35.264 0 0 0 28.8 30.72 270.144 270.144 0 0 0 85.44 0c14.976-2.304 25.408-14.784 28.8-29.568a51.392 51.392 0 0 1 24.32-35.264 44.8 44.8 0 0 1 41.472-3.392 38.72 38.72 0 0 0 43.904-9.088c17.28-20.48 31.104-43.264 40.32-67.136a35.328 35.328 0 0 0-10.368-39.744z m-55.616 15.872a151.936 151.936 0 0 1-28.608 47.04c-3.584 3.456-8.96 3.456-12.544 2.56a55.296 55.296 0 0 0-75.2 41.856c-0.896 4.352-3.584 7.872-8.064 8.704a169.152 169.152 0 0 1-59.008 0c-4.48-0.832-7.168-4.352-8.064-8.704a55.552 55.552 0 0 0-25.088-36.608c-1.792-0.832-2.688-1.728-4.48-2.56a61.632 61.632 0 0 0-45.632-1.728c-4.48 1.728-9.856 0.832-12.544-2.688a166.208 166.208 0 0 1-29.504-47.872c-1.792-3.52 0-7.872 3.584-11.328a49.984 49.984 0 0 0 18.752-40.96 52.672 52.672 0 0 0-18.752-40.96c-3.584-2.56-5.376-6.976-3.584-11.328 6.272-16.512 16.128-33.088 28.608-47.04 3.584-3.456 8.96-3.456 12.544-2.56a55.296 55.296 0 0 0 75.2-41.856c0.896-4.352 3.584-7.872 8.064-8.704a169.152 169.152 0 0 1 59.008 0c4.48 0.832 7.168 5.184 8.064 8.704a55.552 55.552 0 0 0 25.088 36.608c1.792 0.832 2.688 1.728 4.48 2.56 14.272 6.144 31.36 7.04 45.632 1.792 4.48-1.792 9.856-0.896 12.544 2.56 12.48 13.952 22.4 30.528 29.504 48 1.792 3.456 0 7.808-3.584 11.264a49.984 49.984 0 0 0-18.752 40.96c0 16.576 7.104 31.36 18.752 40.96 3.584 3.456 5.376 7.808 3.584 11.328z"
        fill="#1874E6"
        p-id="16009"
      ></path>
    </svg>
  );
  const preview = () => (
    <svg
      t="1597475230302"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="17386"
      width="100"
      height="100"
    >
      <path
        d="M512 153.6c224 0 409.6 153.6 435.2 358.4-25.6 204.8-211.2 358.4-435.2 358.4S102.4 716.8 76.8 512C102.4 307.2 288 153.6 512 153.6m0-76.8C243.2 76.8 25.6 268.8 0 512c25.6 243.2 243.2 435.2 512 435.2s486.4-192 512-435.2c-25.6-243.2-243.2-435.2-512-435.2z"
        fill="#3688FF"
        p-id="17387"
      ></path>
      <path
        d="M512 716.8c-115.2 0-204.8-89.6-204.8-204.8 0-115.2 89.6-204.8 204.8-204.8V384c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128c0-38.4-12.8-70.4-38.4-96l51.2-57.6c38.4 38.4 64 96 64 147.2 0 121.6-89.6 211.2-204.8 211.2z"
        fill=""
        p-id="17388"
      ></path>
    </svg>
  );
  const admin = () => (
    <svg
      t="1597475287050"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="18897"
      width="100"
      height="100"
    >
      <path
        d="M876.063 769.024c5.12 34.816 34.82 29.696 39.94 45.056 0 9.723-5.12 45.056-19.967 49.664-14.848 0-34.816-5.12-49.664 0-9.723 5.12-19.963 9.728-25.083 19.968-9.728 25.083 9.723 45.05 0 54.779-14.848 9.728-45.061 25.088-54.784 14.848-14.848-14.848-14.848-34.821-45.056-34.821-39.941 0-39.941 39.94-59.904 39.94-19.968 0-54.784-14.847-54.784-29.7 5.12-19.963 14.848-34.811-5.12-54.78-25.088-19.967-54.784 0-65.024-9.727-14.843-9.728-19.963-34.816-14.843-49.659 5.12-14.848 39.936-14.848 39.936-54.79 0-29.69-34.816-34.81-39.936-54.778-5.12-14.848 5.12-39.941 19.963-45.061 25.088-9.723 39.936 9.728 65.024-9.723 14.848-14.843 9.728-49.664 9.728-59.904 5.12-14.848 25.083-19.968 39.936-19.968 29.696 0 19.963 34.821 59.904 39.941 39.936 0 34.816-14.848 54.779-39.941 25.088 0 45.061 9.728 49.664 19.968 9.728 19.968-9.723 49.664 19.968 69.632 25.083 14.848 49.664-5.12 65.024 0 9.723 5.12 14.843 19.968 19.963 39.941-9.723 29.174-54.784 24.054-49.664 69.115z m-179.707-99.84c-119.808 29.696-74.752 204.288 39.936 184.832 115.2-25.093 99.84-209.92-39.936-184.832zM492.068 494.597c-119.808 0-214.528-94.72-214.528-214.528S372.26 65.541 492.068 65.541c119.803 0 214.523 94.72 214.523 214.528 0.005 114.688-94.715 214.528-214.523 214.528z m174.592 49.659s-79.877 0-74.757 54.784c5.12 59.904-74.752 14.843-89.595 65.024-19.968 59.899 9.723 49.659 25.083 89.6 9.728 25.088-39.936 39.936-34.816 84.992 9.728 59.904 59.904 29.701 74.752 65.024 9.728 29.696-25.083 49.664-104.96 49.664-65.02 0-189.44 0-234.496-5.12 0 0-129.536-5.12-129.536-89.6 0 0-5.12-124.928 74.752-214.528 0 0 84.992-109.568 229.38-109.568l264.193 9.728z"
        fill="#1B70BF"
        p-id="18898"
      ></path>
    </svg>
  );
  const RouteIcon = (props) => <Icon component={route} {...props} />;
  const PersonalInfoIcon = (props) => (
    <Icon component={personalInfo} {...props} />
  );
  const ArticleListIcon = (props) => (
    <Icon component={articleList} {...props} />
  );
  const AppreciateIcon = (props) => <Icon component={appreciate} {...props} />;
  const PicIcon = (props) => <Icon component={pic} {...props} />;
  const PreviewIcon = (props) => <Icon component={preview} {...props} />;
  const AdminIcon = (props) => <Icon component={admin} {...props} />;
  return (
    <div style={{ padding: "0 170px 32px 64px" }}>
      <h1
        style={{
          marginTop: "8px",
          marginBottom: "20px",
          fontSize: "30px",
          fontWeight: "500",
        }}
      >
        总览
      </h1>
      <Row style={{ marginBottom: "40px" }}>
        <Col span={6}>
          <Card
            title={<span style={{ padding: 0 }}>路由导航</span>}
            size="small"
            style={{ width: 320 }}
            bodyStyle={{ textAlign: "center" }}
            hoverable
            onClick={() => {
              props.history.push("/route-navigation");
            }}
          >
            <RouteIcon />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="个人信息"
            style={{ width: 320 }}
            bodyStyle={{ textAlign: "center" }}
            hoverable
            size="small"
            onClick={() => {
              props.history.push("/side-information");
            }}
          >
            <PersonalInfoIcon />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="文章列表"
            style={{ width: 320 }}
            hoverable
            bodyStyle={{ textAlign: "center" }}
            size="small"
            onClick={() => {
              props.history.push("/article-list");
            }}
          >
            <ArticleListIcon />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card
            title="赞赏设置"
            style={{ width: 320 }}
            hoverable
            bodyStyle={{ textAlign: "center" }}
            size="small"
            onClick={() => {
              props.history.push("/appreciaton-settings");
            }}
          >
            <AppreciateIcon />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="图片管理"
            style={{ width: 320 }}
            hoverable
            bodyStyle={{ textAlign: "center" }}
            size="small"
            onClick={() => {
              props.history.push("/picture-library");
            }}
          >
            <PicIcon />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="实时预览"
            style={{ width: 320 }}
            hoverable
            bodyStyle={{ textAlign: "center" }}
            size="small"
            onClick={() => {
              props.history.push("/preview");
            }}
          >
            <PreviewIcon />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="管理员"
            style={{ width: 320 }}
            hoverable
            bodyStyle={{ textAlign: "center" }}
            size="small"
            onClick={() => {
              props.history.push("/administrators");
            }}
          >
            <AdminIcon />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
