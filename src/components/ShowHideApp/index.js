import { Component } from "react"

class ShowHideApp extends Component {
    state = {
        presentState: "false",
        secondState: "false"
    }

    render(props) {
        const { presentState, secondState } = this.state
        const { Sample } = this.props
        let First
        let Second


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


        presentState === "true" ? First = <div className="col-12 rounded m-1 p-3 bg-light"><h1>Sherlock</h1></div>
            : First = ""

        secondState === "true" ? Second = <div className="col-12 rounded m-1 p-3 bg-light"><h1>Holmes</h1></div>
            : Second = ""



        return (
            <div className="row vh-100">
                <div className="col align-self-center text-center">
                    <h1 className="col-12 text-light">Show/Hide</h1>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="col-5">
                            <button onClick={clickFirst} className="col-12 m-1 btn btn-light mb-3">First Name</button>
                            {First}
                        </div>

                        <div className="col-5">
                            <button onClick={clickSecond} className="col-12 m-1 btn btn-light mb-3">Last Name</button>
                            {Second}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ShowHideApp