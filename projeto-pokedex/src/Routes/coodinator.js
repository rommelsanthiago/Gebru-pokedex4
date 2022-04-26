export const goToHome = (navigate) => {
    navigate('/')
}

export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}

export const goToDetails = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goToBalte = (navigate) => {
    navigate('/batlezone')
}

export const goToBack = (navigate) => {
    navigate(-1)
}