import {parse} from 'cookie';
export async function getServerSideProps({req}) {
    // Parse cookies from the request
    const cookies = parse(req.headers.cookie || '');
    // Get CSRF token from cookies
    const csrfToken = cookies['csrf-token'];
    console.log('CSRF Token home page :', csrfToken);
    if (!csrfToken) {
        // reload page
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
    // You can now use the CSRF token for your SSR logic or pass it to the page props
    console.log('CSRF Token:', csrfToken);
    return {
        props: {
            csrfToken, // Pass the CSRF token to your page component
        },
    };
}
const  Home = ({csrfToken}) => {
    return (
        <div style={styles.container}>
            <h1>Home Page </h1>
            <h3>Evert time page change or refresh CSRF new token generate </h3>
            <p>CSRF : {csrfToken}</p>
        </div>
    );
};
const styles = {
    container: {
        padding: "20px",
    },
};
export default Home;


