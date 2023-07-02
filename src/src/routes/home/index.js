import { Component } from 'preact';
import style from './style.css';
import Calculator from '../../components/calculator';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Calculator />
			</div>
		);
	}
}