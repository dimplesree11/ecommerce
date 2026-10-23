import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main className="main-content position-relative">
          <div>
            {children}
            {/* <footer className="footer pt-5 ">
              <div className="  w-100 bg-white">
                <div className=" mx-auto">
                  <div className="text-center text-sm text-muted text-lg-start">
                  </div>
                </div>
              </div>
            </footer> */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;