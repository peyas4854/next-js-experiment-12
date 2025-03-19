import { parse } from 'cookie';
export async function getServerSideProps({ req }) {
    // Parse cookies from the request
    const cookies = parse(req.headers.cookie || '');
    // Get CSRF token from cookies
    const csrfToken = cookies['csrf-token'];
    if (!csrfToken) {
        return {
            notFound: true, // or handle the case where CSRF token is missing
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
const About = ({csrfToken}) => {
    return (
        <div style={styles.container}>
            <h1>About Us</h1>
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

export default About;
