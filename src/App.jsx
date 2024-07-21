import React from 'react'
// import FavoriteComponent from './Components/FavoriteComponent/FavoriteComponent'
// import FilterRecipesComponent from './Components/FilterRecipeComponent/FilterRecipesComponent'
// import HomeComponent from './Components/HomeComponent/HomeComponent'
// import SearchComponent from './Components/SearchComponent/SearchComponent'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeComponent from './Components/HomeComponent/HomeComponent'
import SearchComponent from './Components/SearchComponent/SearchComponent'
import FilterRecipesComponent from './Components/FilterRecipeComponent/FilterRecipeComponent'
import FavoriteComponent from './Components/FavoriteComponent/FavoriteComponent'

function App() {
  return (
    // <React.Fragment>
    //   <FavoriteComponent/>
    //   <FilterRecipesComponent/>
    //   <HomeComponent/>
    //   <SearchComponent/>
    // </React.Fragment>
    <BrowserRouter>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/search'>Search</Link>
      </li>
      <li>
        <Link to='/Filter'>Filter</Link>
      </li>
      <li>
        <Link to='/Favorite'>Favorite</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path='/' element={<HomeComponent/>}/>
      <Route exact path='/search' element={<SearchComponent/>}/>
      <Route exact path='/Filter' element={<FilterRecipesComponent/>}/>
      <Route exact path='/Favorite' element={<FavoriteComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App