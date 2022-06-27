import React, { Component } from "react";
import LinksSection from "../components/terms/LinksSection";
import TermsContentSection from "../components/terms/TermsContentSection";

class TermsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "terminos-servicio",
          title: "Términos de servicio",
          type: "terms",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod fermentum ultricies turpis at ac facilisis. Urna, nisi, laoreet id convallis magna id diam, mattis. A nisl rhoncus lacus et eu non sagittis fermentum, tempus. Pharetra, sed duis vel id nisi, nibh. Blandit viverra blandit malesuada id donec tincidunt. Nulla ut feugiat et accumsan blandit sit tincidunt. Ipsum nec laoreet facilisi tincidunt rutrum. Tellus tincidunt facilisis varius sit ut. Sem egestas enim, interdum egestas rhoncus mi. In enim habitant nunc enim egestas vestibulum. Faucibus feugiat molestie rhoncus auctor amet, proin mi, dolor. Quam tristique suspendisse lectus tempor.<br />
          Sed consequat massa mattis mattis neque, vestibulum, pellentesque arcu. In natoque libero ac cras posuere. Tristique ullamcorper bibendum egestas a nisl, faucibus arcu. Libero lorem massa et gravida urna aliquet. Tempor, convallis duis rutrum sodales aliquet nisl eget amet. Natoque ut duis egestas feugiat ut sapien. Cursus eget lacus, sed ac tellus neque aenean. Sed integer sagittis, semper tellus volutpat id. Malesuada semper amet ut potenti fermentum donec dignissim metus.<br />
          Venenatis tristique consequat, vehicula tellus. Leo porttitor in malesuada quis tortor vitae, mauris. Porta varius dolor ultrices diam congue gravida morbi tempor. Morbi eleifend pulvinar facilisi faucibus nec, enim. Adipiscing felis consectetur et consectetur quis. Sapien urna sed fringilla massa erat in. Aenean mauris morbi quis sollicitudin nunc, integer sed. Pellentesque diam etiam sapien, a dignissim egestas magnis pretium, cras. Quam arcu dignissim volutpat tempus non orci porttitor non, et. Consequat tellus egestas viverra tortor, enim.<br />
          Senectus non lobortis suspendisse porttitor vitae, suspendisse vestibulum neque. Pellentesque nunc, vitae non amet gravida tincidunt tortor sem turpis. Adipiscing nec sagittis, mattis pretium suscipit purus posuere. Augue tortor amet suscipit proin integer turpis pellentesque congue dignissim. Lacus ac faucibus rhoncus sed. Pellentesque purus aliquet ultricies phasellus venenatis. Lacus, arcu augue bibendum molestie dignissim. Urna etiam tincidunt justo, id vel massa, volutpat donec consectetur.<br />
          Maecenas pharetra sed sed porttitor. Arcu, fusce elit, ac tortor, fusce lacus, tempor eleifend. Nulla quam id facilisi nulla maecenas ipsum elit. Dis ipsum libero imperdiet scelerisque morbi. Sollicitudin feugiat odio etiam maecenas tincidunt. Id viverra ut mattis quam morbi faucibus maecenas nam. Semper justo habitasse commodo fames nunc tincidunt diam amet. Ac blandit dolor senectus vestibulum volutpat enim eget. Nulla integer viverra scelerisque facilisi consectetur aliquet. Cursus fames penatibus aliquet leo sit massa. Semper enim aenean mi, rutrum. Scelerisque nisi dolor egestas lacus aliquam vel purus magna. Posuere sem lobortis feugiat aliquam.<br />
          Sed proin sit in blandit in nunc. Diam diam cras in pretium ut convallis vulputate dignissim. Cursus in risus, aliquam, quis molestie. Eu sed urna eu penatibus mattis vel turpis sit eu. Quam nullam diam duis semper in. Ullamcorper mollis venenatis purus nullam massa. Eu placerat enim nec id diam interdum risus. Diam non adipiscing non gravida. Libero vitae semper eleifend sed accumsan egestas diam nisi blandit.`,
        },
        {
          id: "terminos-servicio-pagos",
          title: "Términos de servicio sobre pagos",
          type: "terms",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod fermentum ultricies turpis at ac facilisis. Urna, nisi, laoreet id convallis magna id diam, mattis. A nisl rhoncus lacus et eu non sagittis fermentum, tempus. Pharetra, sed duis vel id nisi, nibh. Blandit viverra blandit malesuada id donec tincidunt. Nulla ut feugiat et accumsan blandit sit tincidunt. Ipsum nec laoreet facilisi tincidunt rutrum. Tellus tincidunt facilisis varius sit ut. Sem egestas enim, interdum egestas rhoncus mi. In enim habitant nunc enim egestas vestibulum. Faucibus feugiat molestie rhoncus auctor amet, proin mi, dolor. Quam tristique suspendisse lectus tempor.<br />
          Sed consequat massa mattis mattis neque, vestibulum, pellentesque arcu. In natoque libero ac cras posuere. Tristique ullamcorper bibendum egestas a nisl, faucibus arcu. Libero lorem massa et gravida urna aliquet. Tempor, convallis duis rutrum sodales aliquet nisl eget amet. Natoque ut duis egestas feugiat ut sapien. Cursus eget lacus, sed ac tellus neque aenean. Sed integer sagittis, semper tellus volutpat id. Malesuada semper amet ut potenti fermentum donec dignissim metus.<br />
          Venenatis tristique consequat, vehicula tellus. Leo porttitor in malesuada quis tortor vitae, mauris. Porta varius dolor ultrices diam congue gravida morbi tempor. Morbi eleifend pulvinar facilisi faucibus nec, enim. Adipiscing felis consectetur et consectetur quis. Sapien urna sed fringilla massa erat in. Aenean mauris morbi quis sollicitudin nunc, integer sed. Pellentesque diam etiam sapien, a dignissim egestas magnis pretium, cras. Quam arcu dignissim volutpat tempus non orci porttitor non, et. Consequat tellus egestas viverra tortor, enim.<br />
          Senectus non lobortis suspendisse porttitor vitae, suspendisse vestibulum neque. Pellentesque nunc, vitae non amet gravida tincidunt tortor sem turpis. Adipiscing nec sagittis, mattis pretium suscipit purus posuere. Augue tortor amet suscipit proin integer turpis pellentesque congue dignissim. Lacus ac faucibus rhoncus sed. Pellentesque purus aliquet ultricies phasellus venenatis. Lacus, arcu augue bibendum molestie dignissim. Urna etiam tincidunt justo, id vel massa, volutpat donec consectetur.<br />
          Maecenas pharetra sed sed porttitor. Arcu, fusce elit, ac tortor, fusce lacus, tempor eleifend. Nulla quam id facilisi nulla maecenas ipsum elit. Dis ipsum libero imperdiet scelerisque morbi. Sollicitudin feugiat odio etiam maecenas tincidunt. Id viverra ut mattis quam morbi faucibus maecenas nam. Semper justo habitasse commodo fames nunc tincidunt diam amet. Ac blandit dolor senectus vestibulum volutpat enim eget. Nulla integer viverra scelerisque facilisi consectetur aliquet. Cursus fames penatibus aliquet leo sit massa. Semper enim aenean mi, rutrum. Scelerisque nisi dolor egestas lacus aliquam vel purus magna. Posuere sem lobortis feugiat aliquam.<br />
          Sed proin sit in blandit in nunc. Diam diam cras in pretium ut convallis vulputate dignissim. Cursus in risus, aliquam, quis molestie. Eu sed urna eu penatibus mattis vel turpis sit eu. Quam nullam diam duis semper in. Ullamcorper mollis venenatis purus nullam massa. Eu placerat enim nec id diam interdum risus. Diam non adipiscing non gravida. Libero vitae semper eleifend sed accumsan egestas diam nisi blandit.`,
        },
        {
          id: "politica-privacidad",
          title: "Política de privacidad",
          type: "politics",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod fermentum ultricies turpis at ac facilisis. Urna, nisi, laoreet id convallis magna id diam, mattis. A nisl rhoncus lacus et eu non sagittis fermentum, tempus. Pharetra, sed duis vel id nisi, nibh. Blandit viverra blandit malesuada id donec tincidunt. Nulla ut feugiat et accumsan blandit sit tincidunt. Ipsum nec laoreet facilisi tincidunt rutrum. Tellus tincidunt facilisis varius sit ut. Sem egestas enim, interdum egestas rhoncus mi. In enim habitant nunc enim egestas vestibulum. Faucibus feugiat molestie rhoncus auctor amet, proin mi, dolor. Quam tristique suspendisse lectus tempor.<br />
          Sed consequat massa mattis mattis neque, vestibulum, pellentesque arcu. In natoque libero ac cras posuere. Tristique ullamcorper bibendum egestas a nisl, faucibus arcu. Libero lorem massa et gravida urna aliquet. Tempor, convallis duis rutrum sodales aliquet nisl eget amet. Natoque ut duis egestas feugiat ut sapien. Cursus eget lacus, sed ac tellus neque aenean. Sed integer sagittis, semper tellus volutpat id. Malesuada semper amet ut potenti fermentum donec dignissim metus.<br />
          Venenatis tristique consequat, vehicula tellus. Leo porttitor in malesuada quis tortor vitae, mauris. Porta varius dolor ultrices diam congue gravida morbi tempor. Morbi eleifend pulvinar facilisi faucibus nec, enim. Adipiscing felis consectetur et consectetur quis. Sapien urna sed fringilla massa erat in. Aenean mauris morbi quis sollicitudin nunc, integer sed. Pellentesque diam etiam sapien, a dignissim egestas magnis pretium, cras. Quam arcu dignissim volutpat tempus non orci porttitor non, et. Consequat tellus egestas viverra tortor, enim.<br />
          Senectus non lobortis suspendisse porttitor vitae, suspendisse vestibulum neque. Pellentesque nunc, vitae non amet gravida tincidunt tortor sem turpis. Adipiscing nec sagittis, mattis pretium suscipit purus posuere. Augue tortor amet suscipit proin integer turpis pellentesque congue dignissim. Lacus ac faucibus rhoncus sed. Pellentesque purus aliquet ultricies phasellus venenatis. Lacus, arcu augue bibendum molestie dignissim. Urna etiam tincidunt justo, id vel massa, volutpat donec consectetur.<br />
          Maecenas pharetra sed sed porttitor. Arcu, fusce elit, ac tortor, fusce lacus, tempor eleifend. Nulla quam id facilisi nulla maecenas ipsum elit. Dis ipsum libero imperdiet scelerisque morbi. Sollicitudin feugiat odio etiam maecenas tincidunt. Id viverra ut mattis quam morbi faucibus maecenas nam. Semper justo habitasse commodo fames nunc tincidunt diam amet. Ac blandit dolor senectus vestibulum volutpat enim eget. Nulla integer viverra scelerisque facilisi consectetur aliquet. Cursus fames penatibus aliquet leo sit massa. Semper enim aenean mi, rutrum. Scelerisque nisi dolor egestas lacus aliquam vel purus magna. Posuere sem lobortis feugiat aliquam.<br />
          Sed proin sit in blandit in nunc. Diam diam cras in pretium ut convallis vulputate dignissim. Cursus in risus, aliquam, quis molestie. Eu sed urna eu penatibus mattis vel turpis sit eu. Quam nullam diam duis semper in. Ullamcorper mollis venenatis purus nullam massa. Eu placerat enim nec id diam interdum risus. Diam non adipiscing non gravida. Libero vitae semper eleifend sed accumsan egestas diam nisi blandit.`,
        },
        {
          id: "complementos-politica-privacidad",
          title: "Complementos de la política de privacidad",
          type: "politics-buy",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod fermentum ultricies turpis at ac facilisis. Urna, nisi, laoreet id convallis magna id diam, mattis. A nisl rhoncus lacus et eu non sagittis fermentum, tempus. Pharetra, sed duis vel id nisi, nibh. Blandit viverra blandit malesuada id donec tincidunt. Nulla ut feugiat et accumsan blandit sit tincidunt. Ipsum nec laoreet facilisi tincidunt rutrum. Tellus tincidunt facilisis varius sit ut. Sem egestas enim, interdum egestas rhoncus mi. In enim habitant nunc enim egestas vestibulum. Faucibus feugiat molestie rhoncus auctor amet, proin mi, dolor. Quam tristique suspendisse lectus tempor.<br />
          Sed consequat massa mattis mattis neque, vestibulum, pellentesque arcu. In natoque libero ac cras posuere. Tristique ullamcorper bibendum egestas a nisl, faucibus arcu. Libero lorem massa et gravida urna aliquet. Tempor, convallis duis rutrum sodales aliquet nisl eget amet. Natoque ut duis egestas feugiat ut sapien. Cursus eget lacus, sed ac tellus neque aenean. Sed integer sagittis, semper tellus volutpat id. Malesuada semper amet ut potenti fermentum donec dignissim metus.<br />
          Venenatis tristique consequat, vehicula tellus. Leo porttitor in malesuada quis tortor vitae, mauris. Porta varius dolor ultrices diam congue gravida morbi tempor. Morbi eleifend pulvinar facilisi faucibus nec, enim. Adipiscing felis consectetur et consectetur quis. Sapien urna sed fringilla massa erat in. Aenean mauris morbi quis sollicitudin nunc, integer sed. Pellentesque diam etiam sapien, a dignissim egestas magnis pretium, cras. Quam arcu dignissim volutpat tempus non orci porttitor non, et. Consequat tellus egestas viverra tortor, enim.<br />
          Senectus non lobortis suspendisse porttitor vitae, suspendisse vestibulum neque. Pellentesque nunc, vitae non amet gravida tincidunt tortor sem turpis. Adipiscing nec sagittis, mattis pretium suscipit purus posuere. Augue tortor amet suscipit proin integer turpis pellentesque congue dignissim. Lacus ac faucibus rhoncus sed. Pellentesque purus aliquet ultricies phasellus venenatis. Lacus, arcu augue bibendum molestie dignissim. Urna etiam tincidunt justo, id vel massa, volutpat donec consectetur.<br />
          Maecenas pharetra sed sed porttitor. Arcu, fusce elit, ac tortor, fusce lacus, tempor eleifend. Nulla quam id facilisi nulla maecenas ipsum elit. Dis ipsum libero imperdiet scelerisque morbi. Sollicitudin feugiat odio etiam maecenas tincidunt. Id viverra ut mattis quam morbi faucibus maecenas nam. Semper justo habitasse commodo fames nunc tincidunt diam amet. Ac blandit dolor senectus vestibulum volutpat enim eget. Nulla integer viverra scelerisque facilisi consectetur aliquet. Cursus fames penatibus aliquet leo sit massa. Semper enim aenean mi, rutrum. Scelerisque nisi dolor egestas lacus aliquam vel purus magna. Posuere sem lobortis feugiat aliquam.<br />
          Sed proin sit in blandit in nunc. Diam diam cras in pretium ut convallis vulputate dignissim. Cursus in risus, aliquam, quis molestie. Eu sed urna eu penatibus mattis vel turpis sit eu. Quam nullam diam duis semper in. Ullamcorper mollis venenatis purus nullam massa. Eu placerat enim nec id diam interdum risus. Diam non adipiscing non gravida. Libero vitae semper eleifend sed accumsan egestas diam nisi blandit.`,
        },
      ],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;

    return (
      <main className="terms-page">
        <LinksSection />
        <TermsContentSection termsData={data} />
      </main>
    );
  }
}

export default TermsPage;
