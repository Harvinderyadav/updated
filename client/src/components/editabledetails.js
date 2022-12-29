// form to appear when edit button is clicked

function Editabledetails({editformdata, handleEditformData,handleEditFormSubmit}){
  
    return(
            <tr>
                <td>
                <input type="text" name="Name" placeholder="Name" value={editformdata.Name} onChange={handleEditformData} />
                </td>
                <td>
                <input type="text" name="address" placeholder="address" value={editformdata.address} onChange={handleEditformData} />
                </td>
                <td>
                <input type="text" name="rollno"  placeholder="rollno" value={editformdata.rollno} onChange={handleEditformData}/>
                </td>
                
                <td>
                <input type="text"  name="contactno"  placeholder="contactno" value={editformdata.contactno} onChange={handleEditformData} />
                </td>
                <td>
                <input type="text"  name="email" placeholder="email" value={editformdata.email} onChange={handleEditformData} />
                </td>
                <td>
                    <button type="submit" onClick={handleEditFormSubmit}>Save</button>
                </td>
            </tr>
        
    )
}

export default Editabledetails;