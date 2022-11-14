import MainLayout from "@layouts/MainLayout";
import Home from "@components/Home";
export default function index() {
  return (
    <>
      <MainLayout
        title={"Josue | Corea"}
        description={"Sitio web para gestion de proyectos gratuitos"}
      >
        <Home />
      </MainLayout>
    </>
  );
}
