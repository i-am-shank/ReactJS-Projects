import "./App.css";

// Following sections imported in the order

import BarSoapsSection from "./sections/BarSoapsSection";
import ExpressionSection from "./sections/ExpressionSection";
import WarmupSection from "./sections/WarmupSection";
import AttentionSEction from "./sections/AttentionSection";
import PostpooSection from "./sections/PostpooSection";
import DomesticSection from "./sections/DomesticSection";
import StoreLocatorSection from "./sections/StoreLocatorSection";
import QuoteSection from "./sections/QuoteSection";
import FooterSection from "./sections/FooterSection";

function App() {
    return (
        <div className="App">
            <BarSoapsSection />
            <ExpressionSection />
            <WarmupSection />
            <AttentionSEction />
            <PostpooSection />
            <DomesticSection />
            <StoreLocatorSection />
            <QuoteSection />
            <FooterSection />
        </div>
    );
}

export default App;
