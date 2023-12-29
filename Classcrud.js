import React from "react";
class Classcrud extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {mytext: " ",myarray: [],editIdx: null,todoList:""};
    }
    onChangeDo(event) 
    {
        this.setState({mytext:event.target.value});
    }
    onClickAdd(event) 
    {
        if (this.state.editIdx != null) 
        {
            this.state.myarray[this.state.editIdx] = event;
        } 
        else 
        {
            this.state.myarray.push(event); // array main push kiya text (this.state.mytext) jo niche se aaya and store hua as event
        }
        this.setState({myarray:this.state.myarray, mytext: " ",editIdx: null});
    }
    removeItem(index) 
    {
        let xyz = this.state.myarray.splice(index, 1);
        this.setState({todoList: xyz});
    }
    editItem(index) 
    {
        this.setState({mytext:this.state.myarray[index],editIdx: index});
    }
    render() 
    {
        return (
            <div>
                Enter Name : <input type="text" value={this.state.mytext} onChange={this.onChangeDo.bind(this)}/>
                <button onClick={() => this.onClickAdd(this.state.mytext)}>Add</button>
                <table border={1}>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    {this.state.myarray.map((value, index) => 
                    (
                        <tr key={index}>
                            <td>{value}</td>
                            <td>
                                <button onClick={() => this.editItem(index)}>Edit</button>
                                <button onClick={() => this.removeItem(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Classcrud;