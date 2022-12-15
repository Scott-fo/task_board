// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.6.1
// source: protos/lists.proto

package protos

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ListEntry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id    string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name  string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Tasks []string `protobuf:"bytes,3,rep,name=tasks,proto3" json:"tasks,omitempty"`
}

func (x *ListEntry) Reset() {
	*x = ListEntry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListEntry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListEntry) ProtoMessage() {}

func (x *ListEntry) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListEntry.ProtoReflect.Descriptor instead.
func (*ListEntry) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{0}
}

func (x *ListEntry) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ListEntry) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ListEntry) GetTasks() []string {
	if x != nil {
		return x.Tasks
	}
	return nil
}

type GetListsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GetListsRequest) Reset() {
	*x = GetListsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetListsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetListsRequest) ProtoMessage() {}

func (x *GetListsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetListsRequest.ProtoReflect.Descriptor instead.
func (*GetListsRequest) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{1}
}

type GetListsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Lists []*ListEntry `protobuf:"bytes,1,rep,name=lists,proto3" json:"lists,omitempty"`
}

func (x *GetListsResponse) Reset() {
	*x = GetListsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetListsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetListsResponse) ProtoMessage() {}

func (x *GetListsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetListsResponse.ProtoReflect.Descriptor instead.
func (*GetListsResponse) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{2}
}

func (x *GetListsResponse) GetLists() []*ListEntry {
	if x != nil {
		return x.Lists
	}
	return nil
}

type DeleteListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeleteListRequest) Reset() {
	*x = DeleteListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteListRequest) ProtoMessage() {}

func (x *DeleteListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteListRequest.ProtoReflect.Descriptor instead.
func (*DeleteListRequest) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{3}
}

func (x *DeleteListRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type DeleteListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteListResponse) Reset() {
	*x = DeleteListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteListResponse) ProtoMessage() {}

func (x *DeleteListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteListResponse.ProtoReflect.Descriptor instead.
func (*DeleteListResponse) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{4}
}

type CreateListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *CreateListRequest) Reset() {
	*x = CreateListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateListRequest) ProtoMessage() {}

func (x *CreateListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateListRequest.ProtoReflect.Descriptor instead.
func (*CreateListRequest) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{5}
}

func (x *CreateListRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *CreateListRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreateListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *CreateListResponse) Reset() {
	*x = CreateListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateListResponse) ProtoMessage() {}

func (x *CreateListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateListResponse.ProtoReflect.Descriptor instead.
func (*CreateListResponse) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{6}
}

type UpdateListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id    string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name  string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Tasks []string `protobuf:"bytes,3,rep,name=tasks,proto3" json:"tasks,omitempty"`
}

func (x *UpdateListRequest) Reset() {
	*x = UpdateListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateListRequest) ProtoMessage() {}

func (x *UpdateListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateListRequest.ProtoReflect.Descriptor instead.
func (*UpdateListRequest) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateListRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpdateListRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateListRequest) GetTasks() []string {
	if x != nil {
		return x.Tasks
	}
	return nil
}

type UpdateListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id    string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name  string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Tasks []string `protobuf:"bytes,3,rep,name=tasks,proto3" json:"tasks,omitempty"`
}

func (x *UpdateListResponse) Reset() {
	*x = UpdateListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_lists_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateListResponse) ProtoMessage() {}

func (x *UpdateListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_lists_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateListResponse.ProtoReflect.Descriptor instead.
func (*UpdateListResponse) Descriptor() ([]byte, []int) {
	return file_protos_lists_proto_rawDescGZIP(), []int{8}
}

func (x *UpdateListResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpdateListResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateListResponse) GetTasks() []string {
	if x != nil {
		return x.Tasks
	}
	return nil
}

var File_protos_lists_proto protoreflect.FileDescriptor

var file_protos_lists_proto_rawDesc = []byte{
	0x0a, 0x12, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x45, 0x0a, 0x09, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x18, 0x03,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x22, 0x11, 0x0a, 0x0f, 0x47,
	0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x34,
	0x0a, 0x10, 0x47, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x20, 0x0a, 0x05, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x0a, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x05, 0x6c,
	0x69, 0x73, 0x74, 0x73, 0x22, 0x23, 0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4c, 0x69,
	0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x14, 0x0a, 0x12, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x37, 0x0a, 0x11, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x14, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x4d,
	0x0a, 0x11, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73,
	0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x22, 0x4e, 0x0a,
	0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73,
	0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x32, 0xeb, 0x01,
	0x0a, 0x0b, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x31, 0x0a,
	0x08, 0x47, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x73, 0x12, 0x10, 0x2e, 0x47, 0x65, 0x74, 0x4c,
	0x69, 0x73, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x11, 0x2e, 0x47, 0x65,
	0x74, 0x4c, 0x69, 0x73, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x37, 0x0a, 0x0a, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x12,
	0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x13, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x37, 0x0a, 0x0a, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x12, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x00, 0x12, 0x37, 0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74,
	0x12, 0x12, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x0e, 0x5a, 0x0c, 0x6c,
	0x69, 0x73, 0x74, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_protos_lists_proto_rawDescOnce sync.Once
	file_protos_lists_proto_rawDescData = file_protos_lists_proto_rawDesc
)

func file_protos_lists_proto_rawDescGZIP() []byte {
	file_protos_lists_proto_rawDescOnce.Do(func() {
		file_protos_lists_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_lists_proto_rawDescData)
	})
	return file_protos_lists_proto_rawDescData
}

var file_protos_lists_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_protos_lists_proto_goTypes = []interface{}{
	(*ListEntry)(nil),          // 0: ListEntry
	(*GetListsRequest)(nil),    // 1: GetListsRequest
	(*GetListsResponse)(nil),   // 2: GetListsResponse
	(*DeleteListRequest)(nil),  // 3: DeleteListRequest
	(*DeleteListResponse)(nil), // 4: DeleteListResponse
	(*CreateListRequest)(nil),  // 5: CreateListRequest
	(*CreateListResponse)(nil), // 6: CreateListResponse
	(*UpdateListRequest)(nil),  // 7: UpdateListRequest
	(*UpdateListResponse)(nil), // 8: UpdateListResponse
}
var file_protos_lists_proto_depIdxs = []int32{
	0, // 0: GetListsResponse.lists:type_name -> ListEntry
	1, // 1: ListService.GetLists:input_type -> GetListsRequest
	3, // 2: ListService.DeleteList:input_type -> DeleteListRequest
	5, // 3: ListService.CreateList:input_type -> CreateListRequest
	7, // 4: ListService.UpdateList:input_type -> UpdateListRequest
	2, // 5: ListService.GetLists:output_type -> GetListsResponse
	4, // 6: ListService.DeleteList:output_type -> DeleteListResponse
	6, // 7: ListService.CreateList:output_type -> CreateListResponse
	8, // 8: ListService.UpdateList:output_type -> UpdateListResponse
	5, // [5:9] is the sub-list for method output_type
	1, // [1:5] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_protos_lists_proto_init() }
func file_protos_lists_proto_init() {
	if File_protos_lists_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protos_lists_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListEntry); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetListsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetListsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteListRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateListRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateListRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_lists_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_lists_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protos_lists_proto_goTypes,
		DependencyIndexes: file_protos_lists_proto_depIdxs,
		MessageInfos:      file_protos_lists_proto_msgTypes,
	}.Build()
	File_protos_lists_proto = out.File
	file_protos_lists_proto_rawDesc = nil
	file_protos_lists_proto_goTypes = nil
	file_protos_lists_proto_depIdxs = nil
}
