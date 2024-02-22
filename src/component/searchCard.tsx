import AutocompleteInput from "./autocomplete"
import CalendarInput from "./calenderInput"


const SearchCard = () => {
    return(
        <form>
            <AutocompleteInput  name='from'/>
            <AutocompleteInput  name='to'/>
            <CalendarInput />
            <button className="bg-red text-white p-2 mt-2 rounded-md w-full">Search</button>
        </form>
    )
} 

export default SearchCard