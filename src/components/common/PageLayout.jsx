import { Layout } from "antd";

export default function PageLayout({ children }) {
  return (
    <Layout.Content
      className="site-layout"
      style={{
        marginTop: 16,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        {children}
      </div>
    </Layout.Content>
  );
}
