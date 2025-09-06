import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  CreditCard, 
  Home, 
  Droplets, 
  Car, 
  FileText, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Clock,
  Receipt
} from "lucide-react";

const paymentServices = [
  {
    id: "property-tax",
    name: "Property Tax",
    description: "Pay annual property tax to Dehradun Municipal Corporation",
    amount: "₹12,450",
    dueDate: "Mar 31, 2026",
    status: "Upcoming",
    icon: Home,
    color: "bg-blue-600 hover:bg-blue-700",
    frequency: "Annual"
  },
  {
    id: "water-bill",
    name: "Water Bill",
    description: "Monthly water supply charges",
    amount: "₹890",
    dueDate: "Sep 15, 2025", 
    status: "Due",
    icon: Droplets,
    color: "bg-cyan-600 hover:bg-cyan-700",
    frequency: "Monthly"
  },
  {
    id: "parking-permit",
    name: "Parking Permit",
    description: "Annual residential parking permit",
    amount: "₹2,400",
    dueDate: "Dec 31, 2025",
    status: "Active",
    icon: Car,
    color: "bg-green-600 hover:bg-green-700",
    frequency: "Annual"
  },
  {
    id: "trade-license",
    name: "Trade License",
    description: "Business license renewal",
    amount: "₹5,600", 
    dueDate: "Jan 15, 2026",
    status: "Upcoming",
    icon: FileText,
    color: "bg-purple-600 hover:bg-purple-700",
    frequency: "Annual"
  }
];

const recentTransactions = [
  {
    id: "TXN001",
    service: "Society Maintenance",
    amount: "₹3,500",
    date: "Sep 1, 2025",
    status: "Completed",
    method: "UPI",
    transactionId: "UPI2425090112345"
  },
  {
    id: "TXN002", 
    service: "Electricity Bill",
    amount: "₹1,230",
    date: "Aug 28, 2025",
    status: "Completed",
    method: "Net Banking",
    transactionId: "NB2425082812345"
  },
  {
    id: "TXN003",
    service: "Water Bill",
    amount: "₹850",
    date: "Aug 15, 2025", 
    status: "Completed",
    method: "Credit Card",
    transactionId: "CC2425081512345"
  }
];

const paymentMethods = [
  { id: "upi", name: "UPI", icon: "📱" },
  { id: "netbanking", name: "Net Banking", icon: "🏦" },
  { id: "cards", name: "Debit/Credit Cards", icon: "💳" },
  { id: "wallet", name: "Digital Wallets", icon: "👛" }
];

interface PaymentsScreenProps {
  onBack: () => void;
}

export function PaymentsScreen({ onBack }: PaymentsScreenProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Due":
        return "bg-red-100 text-red-800";
      case "Active":
        return "bg-green-100 text-green-800";
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Due":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "Active":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Upcoming":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          <h1 className="text-xl">Payments & Services</h1>
        </div>
        <p className="text-sm text-muted-foreground">Manage bills and government services</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl">₹2,340</div>
              <div className="text-sm text-muted-foreground">Pending Bills</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl">₹5,580</div>
              <div className="text-sm text-muted-foreground">Paid This Month</div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Services */}
        <div>
          <h2 className="text-lg mb-3">Government Services</h2>
          <div className="space-y-3">
            {paymentServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {service.frequency}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Due: {service.dueDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-lg">{service.amount}</div>
                        <div className="flex items-center gap-1 mt-1">
                          {getStatusIcon(service.status)}
                          <Badge className={`text-xs ${getStatusColor(service.status)}`}>
                            {service.status}
                          </Badge>
                        </div>
                        {service.status === "Due" && (
                          <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                            Pay Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h2 className="text-lg mb-3">Accepted Payment Methods</h2>
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center gap-2 p-2 border border-border rounded-lg">
                    <span className="text-lg">{method.icon}</span>
                    <span className="text-sm">{method.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-lg mb-3">Recent Transactions</h2>
          <Card>
            <CardContent className="p-0">
              {recentTransactions.map((transaction, index) => (
                <div 
                  key={transaction.id}
                  className={`p-4 ${
                    index !== recentTransactions.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Receipt className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{transaction.service}</h4>
                        <div className="text-xs text-muted-foreground">
                          {transaction.date} • {transaction.method}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ID: {transaction.transactionId}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{transaction.amount}</div>
                      <Badge className={`text-xs ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon */}
        <div>
          <h2 className="text-lg mb-3">Coming Soon</h2>
          <Card className="border-dashed border-2">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="font-medium mb-2">More Services Coming</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We're working to add more government services like driving license renewal, 
                voter ID services, and certificate applications.
              </p>
              <Button variant="outline" size="sm">
                Request a Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}