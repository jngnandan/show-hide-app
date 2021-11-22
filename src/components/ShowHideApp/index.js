import { Component } from "react"

class ShowHideApp extends Component {
    state = {
        presentState: "false",
        secondState: "false"
    }

    render(props) {
        const { presentState, secondState } = this.state

        const clickFirst = () => {
            presentState === "false" ?
                this.setState({
                    presentState: "true"
                }) :
                this.setState({
                    presentState: "false"
                })
        }

        const clickSecond = () => {
            secondState === "false" ?
                this.setState({
                    secondState: "true"
                }) :
                this.setState({
                    secondState: "false"
                })
        }


        return (
            <div className="row vh-100">
                <div className="col align-self-center text-center">
                    <h1 className="col-12 text-light">Show/Hide</h1>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="col-5">
                            <button onClick={clickFirst} className="col-12 m-1 btn btn-light mb-3">First Name</button>
                            {presentState === "true" && <div className="col-12 rounded m-1 p-3 bg-light"><h1>Sherlock</h1></div>}
                        </div>

                        <div className="col-5">
                            <button onClick={clickSecond} className="col-12 m-1 btn btn-light mb-3">Last Name</button>
                            {secondState === "true" && <div className="col-12 rounded m-1 p-3 bg-light"><h1>Holmes</h1></div>}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ShowHideApp