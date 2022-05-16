import {
  InputChangeEventDetail,
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
// import "./theme/variables.css";

//? React Imports
import { useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  //? STATES
  const [height, setHeight] = useState<number | null>();
  const [weight, setWeight] = useState<number | null>();
  const [bmi, setBmi] = useState<number | null>();
  //? FUNCTIONS
  const handleOnChange = (e: any) => {
    if (e.target.name === "height") setHeight(+e.target!.value!);
    if (e.target.name === "weight") setWeight(+e.target!.value!);
  };
  const calculateBMI = (): void => {
    const result = +weight! / (+height! * +height!);

    if (!isNaN(result)) {
      setBmi(+result.toFixed(2));
    }
  };
  const reset = (): void => {
    setHeight(null);
    setWeight(null);
    setBmi(null);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel position="floating">Your Height</IonLabel>
              <IonInput
                name="height"
                value={height}
                onIonChange={(e: CustomEvent<InputChangeEventDetail>) =>
                  handleOnChange(e)
                }
                type="number"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel position="floating">Your Weight</IonLabel>
              <IonInput
                name="weight"
                value={weight}
                onIonChange={(e) => handleOnChange(e)}
                type="number"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick={() => calculateBMI()}>
                <IonIcon slot="start" icon={calculatorOutline} />
                Calculate
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton onClick={() => reset()}>
                <IonIcon slot="start" icon={refreshOutline} />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
          {bmi && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <h2>BMI: {bmi}</h2>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
