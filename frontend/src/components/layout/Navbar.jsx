import { useNavigate } from 'react-router-dom'
import CardNav from './CardNav'

function Navbar() {
    const navigate = useNavigate();

    const items = [
        {
            label: "About",
            bgColor: "#1B1722",
            textColor: "#fff",
            links: [
                { label: "Home", ariaLabel: "Go Home", to: "/" },
                { label: "About Us", ariaLabel: "About Us", to: "/aboutus" }
            ]
        },
        {
            label: "Features",
            bgColor: "#2F293A",
            textColor: "#fff",
            links: [
                { label: "Features", ariaLabel: "View Features", to: "/features" },
                { label: "Plans", ariaLabel: "View Plans", to: "/plans" }
            ]
        },
        {
            label: "Account",
            bgColor: "#2F293A",
            textColor: "#fff",
            links: [
                { label: "Login", ariaLabel: "Login", to: "/login" },
                { label: "Sign Up", ariaLabel: "Sign Up", to: "/signup" },
                { label: "Admin", ariaLabel: "Admin Login", to: "/admin/login" }
            ]
        }
    ];

    return (
        <CardNav
            items={items}
            baseColor="#fff"
            menuColor="#111"
            buttonBgColor="#059669"
            buttonTextColor="#fff"
            buttonLabel="Get Started"
            onButtonClick={() => navigate('/signup')}
        />
    )
}
export default Navbar