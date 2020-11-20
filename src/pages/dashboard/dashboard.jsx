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
            <div className="main-bar">
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
            </div>
        </div>
    )
}