export default function Dashboard(props){
    return(
        <div className="page">
            <div className="nav">
                <span>logo</span>
                <span>lout</span>
            </div>
            <div className="sidebar">
                <div className="profile">
                    <img src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" className="user-avtar" />
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
                    <input type="date"/>
                </div>
                <div className="taskview">

                </div>
            </div>
        </div>
    )
}