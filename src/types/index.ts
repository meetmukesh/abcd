export interface Contract {
  contractId: string;
  contractName: string;
  customer: string;
  country: string;
  contractValue: number;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Completed' | 'On Hold';
  programManager: string;
  executiveSponsor: string;
}

export interface DeliverableBatch {
  batchId: string;
  batchName: string;
  description: string;
  deliverableType: string;
  quantity: number;
  unit: string;
  status: 'Not Started' | 'In Progress' | 'Ready for Acceptance' | 'Accepted' | 'Delivered';
  readiness: number;
  plannedStart: string;
  plannedEnd: string;
  actualStart?: string;
  actualEnd?: string;
  acceptanceDate?: string;
  owner: string;
  linkedDocs: string[];
}

export interface Milestone {
  milestoneId: string;
  milestoneName: string;
  description: string;
  type: 'Contractual' | 'Internal' | 'Financial' | 'Delivery' | 'Acceptance';
  dueDate: string;
  status: 'Planned' | 'In Progress' | 'Completed' | 'Delayed' | 'Cancelled';
  completion: number;
  actualDate?: string;
  owner: string;
  batchId?: string;
  comments?: string;
}

export interface Invoice {
  invoiceId: string;
  milestoneId: string;
  invoiceDate: string;
  amount: number;
  status: 'Paid' | 'Unpaid' | 'Partial';
  paymentDate?: string;
  dueDate: string;
  description: string;
}

export interface CustomerMeeting {
  meetingId: string;
  date: string;
  location: string;
  purpose: string;
  attendees: string;
  outcome: string;
  followUpActions: string;
}

export interface CustomerAction {
  actionId: string;
  meetingId: string;
  description: string;
  owner: string;
  dueDate: string;
  status: 'Open' | 'In Progress' | 'Closed' | 'Overdue';
  resolution?: string;
}

export interface SupportCase {
  caseId: string;
  batchId: string;
  description: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  reportedDate: string;
  resolvedDate?: string;
  owner: string;
}

export interface Document {
  docId: string;
  title: string;
  type: string;
  category: string;
  linkedTo: string;
  filePath: string;
  uploadDate: string;
  owner: string;
}

export interface User {
  userId: string;
  username: string;
  fullName: string;
  email: string;
  passwordHash: string;
  role: string;
  enabled: boolean;
  createdDate: string;
  lastLogin?: string;
  failedAttempts: number;
  lockedUntil?: string;
}

export interface Role {
  roleId: string;
  roleName: string;
  description: string;
}

export interface Permission {
  permissionId: string;
  roleName: string;
  module: string;
  action: 'view' | 'create' | 'edit' | 'delete' | 'admin';
  resource?: string;
}

export interface AuditLogEntry {
  logId: string;
  timestamp: string;
  userId: string;
  action: string;
  module: string;
  recordIdentifier: string;
  previousValue: string | null;
  newValue: string | null;
}
