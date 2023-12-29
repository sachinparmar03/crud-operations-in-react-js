import React, { Component } from 'react';

class Crud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            newItemName: '',
            updateItemId: null,
            updateItemName: '',
        };
    }

    handleAdd = () => {
        const { data, newItemName } = this.state;
        const newItem = { id: data.length + 1, name: newItemName };
        this.setState({
            data: [...data, newItem],
            newItemName: '',
        });
    };

    handleUpdate = () => {
        const { data, updateItemId, updateItemName } = this.state;
        const updatedData = data.map(item => {
            if (item.id === updateItemId) {
                return { ...item, name: updateItemName };
            }
            return item;
        });
        this.setState({
            data: updatedData,
            updateItemId: null,
            updateItemName: '',
        });
    };

    handleDelete = (id) => {
        const { data } = this.state;
        const updatedData = data.filter(item => item.id !== id);
        this.setState({ data: updatedData });
    };

    handleInputChange = (e) => {
        this.setState({ newItemName: e.target.value });
    };

    handleEditInputChange = (e) => {
        this.setState({ updateItemName: e.target.value });
    };

    handleEdit = (id, name) => {
        this.setState({ updateItemId: id, updateItemName: name });
    };

    render() {
        const { data, newItemName, updateItemName } = this.state;

        return (
            <div>
                <div>
                    Name : <input type="text" value={newItemName} onChange={this.handleInputChange} />
                    <button onClick={this.handleAdd}>Add</button>
                </div>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Edit & Delete</th>
                    </tr>
                    {data.map(item => (
                        <tr key={item.id}>
                           <td>{item.name}</td>
                            <td>
                                <button onClick={() => this.handleEdit(item.id, item.name)}>Edit</button>
                                <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
                {this.state.updateItemId !== null && (
                    <div>
                        <input type="text" value={updateItemName} onChange={this.handleEditInputChange}/>
                        <button onClick={this.handleUpdate}>Update</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Crud;
