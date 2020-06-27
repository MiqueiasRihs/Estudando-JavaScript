const user = {
    name: "Miquéias",
    lasName: "Oliveira"
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lasName}`
    }
}

const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName)