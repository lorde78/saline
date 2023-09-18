export default function useLogout() {
    return function() {
        document.cookie = "SalineToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.replace("/");
    }
}