interface Budget {
  companyName: string,
  phone: string,
  city: string,
  state: string,
  address: string,
  total: string,
  orders: {
    name: string,
    shape: string,
    unit: string,
    measures: {
      displayMeasures: string
    },
    surfaceFinish: string,
    edgeFinishing: string,
    edgeFinishingPosition:{
      position: string,
      name: string
    }[],
    quantity:number,
    stoneType: {
      type: string,
      stone: string,
    },
    price:string,
  }[]
}

export default Budget;
