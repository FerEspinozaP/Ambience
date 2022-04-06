import './style.css';

const SearchInput = props =>{
    return (
        <div className="search-input-container flex">
            <i class="ph-magnifying-glass"></i>
            <input placeholder="Canciones, artistas, lista de reproduccion"/>
        </div>
    );

}
  
export default SearchInput;
