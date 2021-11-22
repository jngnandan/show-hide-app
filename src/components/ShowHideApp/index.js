import { Component } from "react"

class ShowHideApp extends Component {
    state = {
        presentState: "false",
        secondState: "false"
    }

    Sample = () => {
        const { presentState } = this.state
        if (presentState === "true") {
            return (
                <div className="col-12 rounded bg-light m-auto m-1">
                    <h1>Sherlock</h1>
                </div>)
        }
    }

    SecondSample = () => {
        const { secondState } = this.state
        if (secondState === "true") {
            return (
                <div className="col-12 rounded bg-light m-auto m-1">
                    <h1>Holmes</h1>
                </div>)
        }
    }

    render(props) {
        const { presentState, secondState } = this.state
        const { Sample } = this.props

        const clickFirst = () => {
            presentState === "true" ?
                this.setState({
                    presentState: "false"
                }) :
                this.setState({
                    presentState: "true"
                })
        }

        const clickSecond = () => {
            secondState === "true" ?
                this.setState({
                    secondState: "false"
                }) :
                this.setState({
                    secondState: "true"
                })
        }




        return (
            <div className="row vh-100">
                <div className="col align-self-center text-center">
                    <h1 className="col-12 text-light">Show/Hide</h1>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="col-5">
                            <button onClick={clickFirst} className="col-12 m-1 btn btn-light mb-3">First Name</button>
                            {this.Sample()}
                        </div>

                        <div className="col-5">
                            <button onClick={clickSecond} className="col-12 m-1 btn btn-light mb-3">Last Name</button>
                            {this.SecondSample()}
                        </div>
                    </div>






                </div>
            </div>
        )
    }
}
export default ShowHideApp