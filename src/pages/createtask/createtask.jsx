export default function CreateTask(props){
    return(
        <div className="page">
        <div className="nav">
            <span>logo</span>
            <span>lout</span>
        </div>
        <div className="sidebar">
            <div className="profile">
                <img src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" className="user-avtar" alt="avtar"/>
                <div className="user-details">
                    <span>Jonas Khanwald</span>
                    <span className="email">jonas@todo.com</span>
                </div>
            </div>
            <div className="category">
                <div className="pills blue blue-border">
                    <span className="category-name ">All</span>
                    <span className="category-count white">30</span>
                </div>

                <div className="pills green green-border">
                    <span className="category-name ">Personal</span>
                    <span className="category-count white">10</span>
                </div>

                <div className="pills purple purple-border">
                    <span className="category-name ">Official</span>
                    <span className="category-count white">10</span>
                </div>

                <div className="pills orange orange-border">
                    <span className="category-name ">Misc</span>
                    <span className="category-count white">10</span>
                </div>
                
            </div>
            <div className="analytics">

            </div>
        </div>
        <div className="main-bar">
            
        <div className="open-task">
                 <div className="task-controls">
                    <button>Back</button>
                    <span className="view-title">Create Task</span>
                </div>
                <div className="form">
                    <div className="task-form">
                        <div className="task-control">
                            <span className="form-label">Enter Task Name</span>
                            <input type="text" className="text" placeholder="Task Name" />
                        </div>
                        <div className="task-control">
                            <span className="form-label">Enter Description</span>
                            <textarea type="text" className="text" placeholder="Description" />
                        </div>

                        <div className="task-control">
                            <span className="form-label">Branch To</span>
                            <div className="subcontrol">
                                <button>To-Do</button>
                                <button>In-Progress</button>
                                <button>Done</button>
                            </div>
                        </div>

                        <div className="task-control">
                            <span className="form-label">Select Tag</span>
                            <div className="subcontrol">
                                <div className="task-tag">
                                    <input type="checkbox" name="tag" />
                                    <span> Personal</span>
                                </div>
                                <div className="task-tag">
                                    <input type="checkbox" name="tag" />
                                    <span> Office</span>
                                </div>
                                <div className="task-tag">
                                    <input type="checkbox" name="tag" />
                                    <span> Miscellaneous</span>
                                </div>
                            </div>
                        </div>

                        <div className="task-control">
                            <span className="form-label">Select Date</span>
                            <input type="date" className="date"/>
                        </div>

                        <div className="task-button">
                            <button className="button gray">Cancel</button>
                            <button className="button green"> Create</button>
                        </div>

                    </div>
                    <div className="subtask-controller task-form">
                        <div className="task-control">
                            <span className="form-label">Sub-Tasks</span>
                        </div>
                        <div className="subcontrol">
                            <input type="checkbox" className="text" placeholder="Task Name" />
                            <input type="text" className="text" placeholder="Sub Task Name" />
                            <button>delete</button>
                        </div>
                        <div className="task-button">
                            <button className="button blue">new </button>
                        </div>

                    </div>
                     
                </div>
            </div>
            </div>
            </div>
    )
}