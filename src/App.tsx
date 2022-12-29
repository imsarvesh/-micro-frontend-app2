import React, { Suspense } from "react";

import { Button } from "Components/Button";


const App = () => (
    <div className="m-3">
        <Suspense fallback="Loading..">
        <Button className="!bg-blue-600" data-testid="helloFriendsButton">Hello Friends 🚀</Button>
        </Suspense>
    </div>
);

export default App;
