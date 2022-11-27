import MainHeader from './main-header';
const Layout: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;