import { Router } from "express";
import { PaymentController } from "../controllers/paymentController";

const router = Router();
const paymentController = new PaymentController();

// Route pour créer une session de paiement
router.post(
  "/create-payment-session",
  paymentController.createPaymentSession.bind(paymentController)
);

// Route pour vérifier le statut d'un paiement
router.get(
  "/payment-status/:sessionId",
  paymentController.checkPaymentStatus.bind(paymentController)
);

// Route pour les remboursements
router.post("/refund", paymentController.createRefund.bind(paymentController));

export default router;
