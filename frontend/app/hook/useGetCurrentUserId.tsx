export default function useGetCurrentUserId(currentUser:string) {
    return JSON.parse(atob(currentUser.split('.')[1])).userId
}