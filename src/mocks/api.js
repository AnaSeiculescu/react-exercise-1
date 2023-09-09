import mockFriends from "./mock-friends"

const wait = (time) => new Promise((res) => {
    setTimeout(() => {
        res()
    }, time)
})

export const getFriends = async () => {
    // return await fetch('http......)

    const data = mockFriends.map((friend) => {
        return {
            id: friend.id,
            firstName: friend.firstName,
            lastName: friend.lastName,
            avatarUrl: friend.avatarUrl
        }
    })
    // const data = mockFriends.map(({ id, firstName, lastName, avatarUrl }) => ({ id, firstName, lastName, avatarUrl }))

    await wait(3000) // server delay

    return data
}