import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";

const Public = () => {
  const content = (
    <section className="public">
      <PublicHeader />
      <main className="public__main p-8">
        <h1 className="text-white">Start takin' notes!</h1>
      </main>
      <PublicFooter />
    </section>
  );
  return content;
};
export default Public;
