export default function Dashboard(props){
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
            {/* <div className="main-bar">
                <div className="controls">
                    <input type="text" placeholder="Search Task by Title" className="search-bar"/>
                    <button className="button green">New Task</button>
                    <input type="date" className="date"/>
                </div>
                <div className="taskview">
                    <div className="taskbar">
                        <div className="orange taskheading">
                            To do
                        </div>
                        <div className="tasks">
                            <div className="task">
                                <div className="heading">
                                    <div className="pills green green-border tag">
                                        <span className="category-name ">Personal</span>
                                    </div>
                                    <div className="settings">
                                        ...
                                    </div>
                                </div>
                                <div className="title">
                                    <span className="task-name">Task Name</span>
                                    <span className="task-date">Nov 1</span>
                                </div>
                                <p className="description">Description</p>
                                <div className="sub-tasks">
                                    <div className="sub-task">
                                        <input type="checkbox" />
                                        <span className="sub-task-title"> Sub task 1</span>
                                    </div>

                                    <div className="sub-task">
                                        <input type="checkbox" className="checkbox"/>
                                        <span className="sub-task-title"> Sub task 1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="taskbar">
                        <div className="green taskheading">
                            In-progress
                        </div>
                    </div>
                    <div className="taskbar">
                        <div className="blue taskheading">
                           Done
                        </div>
                    </div>
                </div>
            </div> */}

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
                    <div className="subtask-controller">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}