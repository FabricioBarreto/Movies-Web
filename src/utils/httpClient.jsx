const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch( API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODg3ZmIyZTQxNGYwYmE5YzAyNGVjOGNiZmZmNmMwOCIsInN1YiI6IjYzN2ViZDAwODViMTA1MDBjOTI2YzdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sryO6Hoc6dg0X3z3o3bxKurhJ1_KDZ6kXAccWdBhCH4",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
    .then((result) => result.json())
}