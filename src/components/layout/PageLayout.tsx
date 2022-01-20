import Header from "./Header";
import Navigation from "./Navigation";

interface IPageLayout {
  children: any
}

const PageLayout = ({ children }: IPageLayout): JSX.Element => {
  return (
    <>
      <Header />

      <main>
        <div className="flex flex-col md:flex-row">
          <Navigation />

          <section>
            <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
              {children}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default PageLayout;
