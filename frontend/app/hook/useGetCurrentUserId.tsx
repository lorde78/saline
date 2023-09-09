export default function useGetCurrentUserId(currentUser) {
    return JSON.parse(atob(currentUser.split('.')[1])).userId
}