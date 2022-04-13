import * as React from "react";

import "./Footer.css";
import FooterElement from "../FooterElement/FooterElement";
import { ReactComponent as Heart } from "../../images/footer/Heart.svg";
import { ReactComponent as Products } from "../../images/footer/Products.svg";
import { ReactComponent as RecipeBook } from "../../images/footer/RecipeBook.svg";
import { ReactComponent as Sparkles } from "../../images/footer/Sparkles.svg";
import { ReactComponent as User } from "../../images/footer/User.svg";

interface IFooterProps {
	sections: string[];
}

const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
	return (
		<footer>
			<FooterElement text={props.sections[0]}>
				<Sparkles />
			</FooterElement>
			<FooterElement text={props.sections[1]}>
				<Products />
			</FooterElement>
			<FooterElement text={props.sections[2]}>
				<RecipeBook />
			</FooterElement>
			<FooterElement text={props.sections[3]}>
				<User />
			</FooterElement>
			<FooterElement text={props.sections[4]}>
				<Heart />
			</FooterElement>
		</footer>
	);
};

export default Footer;
